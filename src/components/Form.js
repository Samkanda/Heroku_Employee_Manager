import Show from "./Show"
import ModalForm from "./Modal"
const Body =() => {
    return (
        <main id="site-main">
            <div className="container">
                <div className="box-nav d-flex justify-between">
                <ModalForm />
                </div>
                {/*form handling */}
                <form action="/" method="POST">
                    <table className="table" id= 'employee_table'>
                        <thead className="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>@Email</th>
                                <th>Gender</th>
                                <th>Status</th>
                                <th>Avatar</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Show/>
                        </tbody>
                    </table>
                </form>
            </div>
        </main>
    )
}
export default Body