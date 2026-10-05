import HomePage from "./(homePage)/homePage";

export const metadata = {
  title: "Rotex Lab | Leading Supplier of Scientific & Medical Equipment",
  description: "Rotex Lab is a premium provider of laboratory equipment, scientific instruments, medical devices, and industrial weighing systems for your professional needs.",
  keywords: ["Rotex Lab", "Laboratory Equipment", "Scientific Instruments", "Medical Devices", "Industrial Weighing Systems", "Premium Equipment Supplier"],
  openGraph: {
    title: "Rotex Lab | Leading Supplier of Scientific & Medical Equipment",
    description: "Rotex Lab is a premium provider of laboratory equipment, scientific instruments, and medical devices.",
    url: "https://rotexbd.com",
    siteName: "Rotex Lab",
    type: "website",
  }
};

export default function Page() {
  return (
    <>
      <h1 className="sr-only">Rotex Lab - Premium Scientific and Medical Equipment Supplier</h1>
      <HomePage />
    </>
  );
}
