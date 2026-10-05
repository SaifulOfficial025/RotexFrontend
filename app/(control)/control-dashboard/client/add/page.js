import ClientForm from '../client-form';

export const metadata = {
  title: "Add Client | Admin Dashboard",
  description: "Add a new client.",
};

export default function AddClientPage() {
  return (
    <div className="space-y-6">
      <ClientForm />
    </div>
  );
}
