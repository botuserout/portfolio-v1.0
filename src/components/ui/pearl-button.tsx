import React from "react";

type PearlButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  size?: "sm" | "md" | "lg";
  href?: string;
  children?: React.ReactNode;
};

export const PearlButton: React.FC<PearlButtonProps> = ({
  label = "Pearl Button",
  size = "md",
  className = "",
  children,
  href,
  ...props
}) => {
  const content = children || label;

  const sizeClasses = {
    sm: "pearl-button--sm",
    md: "pearl-button--md",
    lg: "pearl-button--lg",
  }[size];

  const buttonElement = (
    <button
      className={`pearl-button ${sizeClasses} ${className}`}
      {...props}
    >
      <div className="wrap">
        <p>
          <span className="sparkle-1">✧</span>
          <span className="sparkle-2">✦</span>
          {content}
        </p>
      </div>
    </button>
  );

  return (
    <>
      <style>{`
        .pearl-button {
          --white: #ffe7ff;
          --bg: #080808;
          --radius: 100px;
          outline: none;
          cursor: pointer;
          border: 0;
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius);
          background-color: var(--bg);
          transition: all 0.2s ease;
          box-shadow:
            inset 0 0.3rem 0.9rem rgba(255, 255, 255, 0.3),
            inset 0 -0.1rem 0.3rem rgba(0, 0, 0, 0.7),
            inset 0 -0.4rem 0.9rem rgba(255, 255, 255, 0.5),
            0 3rem 3rem rgba(0, 0, 0, 0.3),
            0 1rem 1rem -0.6rem rgba(0, 0, 0, 0.8);
        }
        .pearl-button .wrap {
          font-family: 'Space Grotesk', 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: rgba(255, 255, 255, 0.85);
          padding: 16px 28px;
          border-radius: inherit;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }
        .pearl-button--sm .wrap {
          font-size: 12px;
          padding: 8px 18px;
          letter-spacing: 0.08em;
        }
        .pearl-button--md .wrap {
          font-size: 14px;
          padding: 12px 24px;
        }
        .pearl-button--lg .wrap {
          font-size: 20px;
          padding: 22px 38px;
        }
        .pearl-button .wrap p .sparkle-2 {
          display: none;
        }
        .pearl-button:hover .wrap p .sparkle-1 {
          display: none;
        }
        .pearl-button:hover .wrap p .sparkle-2 {
          display: inline-block;
          color: #C8FF3D;
        }
        .pearl-button .wrap p {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0;
          transition: all 0.2s ease;
          transform: translateY(2%);
          -webkit-mask-image: linear-gradient(to bottom, white 50%, rgba(255, 255, 255, 0.6));
                  mask-image: linear-gradient(to bottom, white 50%, rgba(255, 255, 255, 0.6));
        }
        .pearl-button .wrap::before,
        .pearl-button .wrap::after {
          content: "";
          position: absolute;
          transition: all 0.3s ease;
        }
        .pearl-button .wrap::before {
          left: -15%;
          right: -15%;
          bottom: 25%;
          top: -100%;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.12);
        }
        .pearl-button .wrap::after {
          left: 6%;
          right: 6%;
          top: 12%;
          bottom: 40%;
          border-radius: 22px 22px 0 0;
          box-shadow: inset 0 10px 8px -10px rgba(255, 255, 255, 0.8);
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.3) 0%,
            rgba(0, 0, 0, 0) 50%,
            rgba(0, 0, 0, 0) 100%
          );
        }
        .pearl-button:hover {
          box-shadow:
            inset 0 0.3rem 0.5rem rgba(255, 255, 255, 0.4),
            inset 0 -0.1rem 0.3rem rgba(0, 0, 0, 0.7),
            inset 0 -0.4rem 0.9rem rgba(255, 255, 255, 0.7),
            0 3rem 3rem rgba(0, 0, 0, 0.3),
            0 1rem 1rem -0.6rem rgba(0, 0, 0, 0.8);
          transform: translateY(-1px);
        }
        .pearl-button:hover .wrap::before {
          transform: translateY(-5%);
        }
        .pearl-button:hover .wrap::after {
          opacity: 0.4;
          transform: translateY(5%);
        }
        .pearl-button:hover .wrap p {
          transform: translateY(-4%);
          color: #ffffff;
        }
        .pearl-button:active {
          transform: translateY(3px);
          box-shadow:
            inset 0 0.3rem 0.5rem rgba(255, 255, 255, 0.5),
            inset 0 -0.1rem 0.3rem rgba(0, 0, 0, 0.8),
            inset 0 -0.4rem 0.9rem rgba(255, 255, 255, 0.4),
            0 3rem 3rem rgba(0, 0, 0, 0.3),
            0 1rem 1rem -0.6rem rgba(0, 0, 0, 0.8);
        }
      `}</style>

      {href ? (
        <a href={href} className="inline-flex">
          {buttonElement}
        </a>
      ) : (
        buttonElement
      )}
    </>
  );
};
export default PearlButton;
