import "../styles/header.css";

export function Header() {
  return (
    <section className="container">
      <div>
        <p className="header">
          TODO APP{" "}
          <span
            style={{
              color: "orange",
              border: "solid 0.45rem",
              padding: "0 0.6% 0 0.2%",
            }}
          >
            REACT
          </span>
        </p>
      </div>
    </section>
  );
}
