import { type Conversions } from "../../utils/interfaces";

const Table = ({ ConversionsData }: { ConversionsData: Conversions[] }) => {
  return (
    <div className="overflow-x-auto">
      <p className="text-center text-2xl font-bold text-proximaColor">
        Data Euros to Dollars in the last five days
      </p>
      <table className="table-zebra table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Date</th>
            <th>High</th>
            <th>Low</th>
            <th>Open</th>
            <th>Close</th>
          </tr>
        </thead>
        <tbody>
          {ConversionsData.map((conversion: Conversions) => (
            <tr key={conversion.id}>
              <td>{conversion.id}</td>
              <td>{conversion.date}</td>
              <td>{conversion.high}</td>
              <td>{conversion.low}</td>
              <td>{conversion.open}</td>
              <td>{conversion.close}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
