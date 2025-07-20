import styles from './Mapping.module.css';

const Mapping = () => {

    const numbers =  [1 , 2, 3, 4, 5];
    const UserList:any[] = [
        {
            id: 1,
            name: 'John',
            age: 30,
        },
        {
            id: 2,
            name: 'Jane',
            age: 25,
        },
        {
            id: 3,
            name: 'Bob',
            age: 40,
        },
    ];


  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Mapping</h1>
      <ul>
        {numbers.map((item, index) => (
            <li className={styles.list} key={index}>{item}</li>
        ))}
      </ul>
      <table className={styles.table}>
        <thead className={styles.tablehead}>
            <tr className={styles.tablerow}>
                <th className={styles.tableitems}>ID</th>
                <th className={styles.tableitems}>Name</th>
                <th className={styles.tableitems}>Age</th>
            </tr>
        </thead>
        <tbody className={styles.tablebody}>
            {UserList.map((item, index) => (
                <tr className={styles.tablerow} key={index}>
                    <td className={styles.tabledata}>{item.id}</td>
                    <td className={styles.tabledata}>{item.name}</td>
                    <td className={styles.tabledata}>{item.age}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Mapping
