import WorkspaceDetailsClient from "@/components/workspace-details-client"; // Import client component

// Generate static paths for SSG (Static Site Generation)
export async function generateStaticParams() {
    try {
        const response = await fetch("https://api.sevenwonder.in/api/workspace");
        const data = await response.json();

        if (!data.success || !data.workspaces) {
            console.error("No workspaces found.");
            return [];
        }

        return data.workspaces.map((workspace: any) => ({
            id: workspace._id, // Ensure this matches the required param
        }));
    } catch (error) {
        console.error("Error fetching workspaces for static paths:", error);
        return [];
    }
}

// Dynamic Page Component
export default async function WorkspaceDetailsPage({ params }: { params: { id: string } }) {
    const { id } = params;

    try {
        // Fetch workspace data for the specific ID
        const res = await fetch(`https://api.sevenwonder.in/api/workspace/${id}`, {
            cache: "no-store", // Ensures fresh data on every request
        });

        if (!res.ok) throw new Error("Failed to fetch workspace");

        const data = await res.json();

        if (!data.success || !data.workspace) {
            return <div className="py-24 text-center">Workspace not found.</div>;
        }

        return (
            <div>
                <WorkspaceDetailsClient workspace={data.workspace} />
            </div>
        );
    } catch (error) {
        console.error("Error fetching workspace:", error);
        return <div className="py-24 text-center">Error loading workspace.</div>;
    }
}
