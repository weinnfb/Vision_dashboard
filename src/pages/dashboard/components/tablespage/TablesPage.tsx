import ProjectsTableSimple from "../../../../components/ProjectsTable";
import { type Row, rowsWide } from "../../../../mocks/projectTableMocks/ProjectsTAbleMocks";
import { styled } from "@mui/material"
import AuthorsTable from "./comoponents/authorsTable";
import { authorsRows } from "../../../../mocks/authorsTableMocks/authorTablemocks";

export default function TablesPage() {
    const handleMore = (r: Row) => console.log('More for', r.company);
    return (
        <Wrapper>
            <AuthorsTable
                rows={authorsRows}
                size="lg" // или "md"/"sm"
                onEdit={(row) => console.log("Edit", row)}
            />
            <ProjectsTableSimple
                onMoreClick={handleMore}
                rows={rowsWide}
                size="lg"
                variant="status"
                showMore
            />
        </Wrapper>
    )
}

const Wrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 24
})