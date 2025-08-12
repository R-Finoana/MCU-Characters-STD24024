import Buttons from "./Buttons";

export default function Table({ characters }) {
    return (
        <>
            <table className="table table-striped">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Real Name</th>
                    <th>Universe</th>
                    <th>Modifications</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Spider-man</td>
                    <td>Peter Parker</td>
                    <td>Earth-616</td>
                    <td>
                        <Buttons/>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Iron Man</td>
                    <td>Tony Starck</td>
                    <td>Earth-616</td>
                </tr>
            </table>
        </>
    )
}