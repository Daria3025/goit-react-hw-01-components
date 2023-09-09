import { TransactionTable, TableHead, TableEl } from './TransactionHistory';



export const TransactionHistory = ({ items }) => {
    return (
        <TransactionTable>
            <thead>
                <tr>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Currency</TableHead>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => {
                    return (
                            <tr key={id}>
                                <TableEl>{type}</TableEl>
                                <TableEl>{amount}</TableEl>
                                <TableEl>{currency}</TableEl>
                            </tr>
                    );
                })}
            </tbody>
        </TransactionTable>
    );
};
