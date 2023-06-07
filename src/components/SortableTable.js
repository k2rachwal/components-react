
import Table from './Table';
import Button from './Button';
import useSort from '../hooks/useSort';

function SortableTable(props) {
 
  const { config, data } = props;

 const {
    sortBy,
    sortOrder,
    sortedData,
    setSortColumn
 } = useSort(data, config);

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th onClick={() => setSortColumn(column.label)}>
          <Button primary>{column.label} IS SORTABLE</Button>
        </th>
      ),
    };
  });



  return (
    <div>
      {sortOrder} - {sortBy}
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
}

export default SortableTable;
