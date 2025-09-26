import { Table } from "reactstrap";

function HoursTable(props) {

    function renderTable() {
        return props.data.map((value) => {
            return (
                <tr>
                    <td>
                        {value['Name']}
                    </td>
                    <td>
                        {value['Date']}
                    </td>
                    <td>
                        {value['Total Time (Hours)']}
                    </td>
                    <td>
                        {value['Activity']}
                    </td>
                </tr>
            )
        })
    }

    return (
        <Table striped borderless>
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Date
                    </th>
                    <th>
                        Hours
                    </th>
                    <th>
                        Activity
                    </th>
                </tr>
            </thead>
            <tbody>
                {renderTable()}
            </tbody>
        </Table>
    )
}

export default HoursTable;