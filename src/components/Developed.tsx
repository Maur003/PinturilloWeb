const DevelopedBy = () => {
  return (
    <div className="mb-8 font-mono text-neutral-10 text-xs text-center">
      <span>
        Desarrollado por{" "}
        <a
          href="https://github.com/Maur003"
          className="inline-block transition duration-300 hover:-translate-y-px outline-none hover:text-primary-10 focus-visible:text-primary-10"
          target="_blank"
          aria-label="Developer"
        >
          {" "}
          Mauricio
        </a>
      </span>
      <span>
        ,{" "}
        <a
          href="https://github.com/NicolasV7"
          className="inline-block transition duration-300 hover:-translate-y-px outline-none hover:text-primary-10 focus-visible:text-primary-10"
          target="_blank"
          aria-label="Developer"
        >
          {" "}
          Nicolas
        </a>
      </span>
      <span>
        ,{" "}
        <a
          href="https://github.com/VaAgudelo17"
          className="inline-block transition duration-300 hover:-translate-y-px outline-none hover:text-primary-10 focus-visible:text-primary-10"
          target="_blank"
          aria-label="Developer"
        >
          {" "}
          Valentina.
        </a>
      </span>
    </div>
  );
};

export default DevelopedBy;
