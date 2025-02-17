import HeroImage from "../assets/hero-image.jpg";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-20 px-6 md:px-12 text-center"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>{" "}
      <div className="relative  max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-6xl font-bold mb-9">
          Quality at its best
        </h1>
        <p className="text-lg text-red-400 font-semibold mb-6">
          AN ISO 9001:2015 CERTIFIED COMPANY
        </p>
        <p className="leading-relaxed text-lg">
          We are <b>CI and SGI casting supplier</b> based in Rajkot, the metal
          hub of <em>Gujarat</em>. We have strong core knowledge and experience
          in foundry and machining. With a highly optimized process and
          machining setup, we achieve efficient production with reduced costs.{" "}
          <br />
          <b>
            <em>“Quality at its best”</em>
          </b>{" "}
          has been our emphasis since inception. With our designing,
          manufacturing, and quality assurance processes, we are ready to serve
          your industry at the highest possible level.
        </p>
      </div>
    </section>
  );
}
