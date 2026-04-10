import FeatureCard from "../components/FeatureCard";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">FreelanceFlow</h1>
      <p className="text-lg text-gray-600 mb-10">Mobile-first app for freelancers to track invoices, send payment reminders, and visualize cash flow.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeatureCard key={0} title="Invoice generator" description="Core feature of FreelanceFlow" />
        <FeatureCard key={1} title="Payment reminders" description="Core feature of FreelanceFlow" />
        <FeatureCard key={2} title="Cash flow dashboard" description="Core feature of FreelanceFlow" />
        <FeatureCard key={3} title="Client portal" description="Core feature of FreelanceFlow" />
      </div>
    </div>
  );
}
