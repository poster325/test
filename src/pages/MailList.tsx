import React, { useState } from "react";
import styled from "styled-components";
import { submitToMailList } from "../utils/emailService";

const PageContainer = styled.div`
  height: 100vh;
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--secondary-color) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  padding: 0 2rem;
  padding-top: 80px;
`;

const ContentCard = styled.div`
  background: var(--bg-primary);
  border-radius: 2rem;
  padding: 1rem 3.5rem 2rem 3.5rem;

  max-width: 800px;
  width: 100%;
  height: calc(100% - 100px);

  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border-color);
  text-align: center;

  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 2rem;
    margin: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 2rem;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Message = styled.div`
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--text-secondary);
  /* margin-bottom: 3rem; */
  text-align: left;

  p {
    margin-bottom: 1.5rem;
  }

  .signature {
    margin-top: 2rem;
    font-weight: 600;
    color: var(--primary-color);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const InputGroup = styled.div`
  text-align: left;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid var(--border-color);
  border-radius: 0.75rem;
  font-size: 1rem;
  background: var(--bg-secondary);
  color: var(--text-primary);
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }

  &::placeholder {
    color: var(--text-light);
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  text-align: left;
  margin-top: 1rem;
`;

const Checkbox = styled.input`
  width: 1.25rem;
  height: 1.25rem;
  accent-color: var(--primary-color);
  margin-top: 0.125rem;
  flex-shrink: 0;
`;

const CheckboxLabel = styled.label`
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--text-secondary);
  cursor: pointer;
`;

const SubmitButton = styled.button`
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover:not(:disabled) {
    background: var(--secondary-color);
    transform: translateY(-2px);
  }

  &:disabled {
    background: var(--text-light);
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled.div`
  width: 100%;
  background: black;

  justify-self: flex-end;
  color: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  margin-top: 1rem;
  font-weight: 600;
`;

const ErrorMessage = styled.div`
  background: #ef4444;
  color: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  margin-top: 1rem;
  font-weight: 600;
`;

const MailList: React.FC = () => {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !consent) {
      setErrorMessage("Please fill in your email and agree to the consent.");
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const submissionData = {
        email,
        consent,
        timestamp: new Date().toISOString(),
      };

      const result = await submitToMailList(submissionData);

      if (result.success) {
        setSubmitStatus("success");
        setEmail("");
        setConsent(false);
      } else {
        setErrorMessage(result.message);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage("Something went wrong. Please try again.");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageContainer>
      <ContentCard>
        <div
          style={{
            width: "100%",
            minHeight: "100%",
            height: "fit-content",
            display: "flex",
            flexDirection: "column",
            alignContent: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <Title>Hey there! 🙌</Title>

          <Message>
            <p>
              Thank you so much for being interested in what we're building – it
              really means a lot to us. 🤍
            </p>
            <p>
              We're getting everything ready behind the scenes, and when the big
              moment comes, we want you to be the first to know! 🚀
            </p>

            <p>
              Just leave your email below and give us a quick yes to collecting
              your info (just for this launch update — pinky promise 🤞).
            </p>

            <p>
              We'll only use it to send you one lovely email when we go live. No
              spam. No weird stuff. Ever.
            </p>

            <p>
              Talk soon,
              <p style={{ display: "inline-block" }} className="signature">
                Team Bind 🧵
              </p>
            </p>
          </Message>

          {submitStatus === "success" ? (
            <SuccessMessage>
              🎉 Thank you! You're all signed up. We'll let you know the moment
              we launch!
            </SuccessMessage>
          ) : (
            <Form onSubmit={handleSubmit}>
              <InputGroup>
                <Label htmlFor="email">Email Address:</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </InputGroup>

              <CheckboxGroup>
                <Checkbox
                  id="consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                />
                <CheckboxLabel htmlFor="consent">
                  <strong>Consent to Personal Data Collection</strong> - I agree
                  to the collection and use of my personal information (email
                  address) for the purpose of receiving a one-time product
                  launch notification.
                </CheckboxLabel>
              </CheckboxGroup>

              <SubmitButton
                type="submit"
                disabled={!email || !consent || isSubmitting}
              >
                {isSubmitting ? "Signing you up..." : "Count me in! 🚀"}
              </SubmitButton>

              {submitStatus === "error" && (
                <ErrorMessage>{errorMessage}</ErrorMessage>
              )}
            </Form>
          )}
        </div>
      </ContentCard>
    </PageContainer>
  );
};

export default MailList;
