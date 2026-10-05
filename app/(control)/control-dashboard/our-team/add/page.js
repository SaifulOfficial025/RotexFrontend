import OurTeamForm from '../our-team-form';

export const metadata = {
  title: "Add Team Member | Admin Dashboard",
  description: "Add a member to Our Team.",
};

export default function AddOurTeamPage() {
  return (
    <div className="space-y-6">
      <OurTeamForm />
    </div>
  );
}
