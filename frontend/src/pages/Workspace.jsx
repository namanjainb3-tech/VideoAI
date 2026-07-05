import AppLayout from "../components/layout/AppLayout";

import WorkspaceHeader from "../components/workspace/WorkspaceHeader";
import WorkspaceGrid from "../components/workspace/WorkspaceGrid";

function Workspace() {
    return (
        <AppLayout>

            <section className="py-12 lg:py-16">

                <WorkspaceHeader />

                <WorkspaceGrid />

            </section>

        </AppLayout>
    );
}

export default Workspace;
