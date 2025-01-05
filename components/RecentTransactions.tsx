import Link from 'next/link'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BankTabItem } from './BankTabItem'
import BankInfo from './BankInfo'
import TransactionsTable from './TransactionsTable'
import { Pagination } from './Pagination'

//import { RecentTransactions } from '@/components/RecentTransactions

const RecentTransactions = ({
  accounts,
  transactions = [],
  appwriteItemId,
  page = 1,
}: RecentTransactionsProps) => {
  const rowsPerPage = 10
  const totalPages = Math.ceil(transactions.length / rowsPerPage)

  const indexOfLastTransaction = page * rowsPerPage
  const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage
  const currentTransactions = transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  )
  return (
    <section className="recent-transactions">
      <header className="flex items-center justify-between">
        <h2 className="recent-transactions-label">RecentTransactions</h2>
        <Link
          href={`/transaction-history/?id=${appwriteItemId}`}
          className="view-all-btn"
        >
          View all
        </Link>
      </header>

      <Tabs defaultValue={appwriteItemId} className="w-full">
        <TabsList className="reacent-transaction-tablist">
          {accounts.map((account: Account) => (
            <TabsTrigger key={account.id} value={account.appwriteItemId}>
              <BankTabItem account={account} appwriteItemId={appwriteItemId} />
            </TabsTrigger>
          ))}
        </TabsList>
        {accounts.map((account: Account) => (
          <TabsContent
            value={account.appwriteItemId}
            key={account.id}
            className="space-y-4"
          >
            <BankInfo
              account={account}
              appwriteItemId={appwriteItemId}
              type="full"
            />
            <TransactionsTable transactions={currentTransactions} />

            <Pagination totalPages={totalPages} page={page} />
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}

export default RecentTransactions
