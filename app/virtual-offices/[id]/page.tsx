import WorkspaceDetailsClient from "../../../components/workspace-details-client"; // Import client component

// Generate static paths for SSG
export async function generateStaticParams() {
    try {
        const response = await fetch("http://46.202.167.117:4000/api/workspace");
        const data = await response.json();
        if (data.success) {
            return data.workspaces.map((workspace: any) => ({
                id: workspace._id,
            }));
        }
    } catch (error) {
        console.error("Error fetching workspaces for static paths:", error);
    }

    return [];
}

export default async function WorkspaceDetailsPage({ params }: { params: { id: string } }) {
    const { id } = params;

    // Fetch data for the specific workspace (server-side)
    const res = await fetch(`http://46.202.167.117:4000/api/workspace/${id}`);
    const data = await res.json();

    if (!data.success || !data.workspace) {
        return <div className="py-24 text-center">Workspace not found.</div>;
    }

    return (
        <div>
            <WorkspaceDetailsClient workspace={data.workspace} />
        </div>
    );
}
