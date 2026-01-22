const StudentTable = () => {
  return (
    <div className="table-box">
      <h3>Registrations</h3>

      <table>
        <thead>
          <tr>
            <th>Child Name</th>
            <th>Application ID</th>
            <th>Parent</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Ailsa Buxton</td>
            <td>CQRG1365</td>
            <td>Susan</td>
            <td className="status waitlisted">Waitlisted</td>
          </tr>
          <tr>
            <td>Isha Roy</td>
            <td>CQRG1350</td>
            <td>Roy</td>
            <td className="status enrolled">Enrolled</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
