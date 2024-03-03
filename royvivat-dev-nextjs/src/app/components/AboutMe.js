export default function AboutMe() {
  return (
    <div className="flex justify-center">
      <div className="max-w-2xl w-full">
        <h1 id="about-me" className="mb-5 text-5xl font-bold font-mono">
          About Me
        </h1>
        <div className="mockup-code shadow-xl bg-primary text-primary-content">
          <pre data-prefix=">" className="text-accent">
            <code>cat aboutme.md</code>
          </pre>
          <pre data-prefix="-">
            <code>Highly motivated problem solver and self-learner.</code>
          </pre>
					<pre data-prefix="-">
            <code>I value respect, integrity, empathy, and open-mindedness.</code>
          </pre>
					<pre data-prefix="-">
            <code>Naturally drawn to programming and mathematics.</code>
          </pre>
					<pre data-prefix="-">
            <code>Pursuing **<b>Masters in Machine Learning.</b>**</code>
          </pre>
					<pre data-prefix="-">
            <code>I created this website as a portfolio and creative outlet.</code>
          </pre>
					<pre data-prefix="-" className="text-success">
            <code>I invite you to check out some of my projects below.</code>
          </pre>
          {/* <pre data-prefix="3" className="bg-warning text-warning-content">
            <code>Error!</code>
          </pre> */}
        </div>
      </div>
    </div>
  );
}
