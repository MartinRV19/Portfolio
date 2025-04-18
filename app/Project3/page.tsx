tsx
import ClientComponent from "./client";

export default function Project3Page() {
  return (
    <div className="container py-8 md:py-12">
      <div className="bg-card border rounded-lg overflow-hidden">
        <ClientComponent />
      </div>
    </div>
  );
}