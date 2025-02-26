import {
      Table,
      TableBody,
      TableCell,
      TableHead,
      TableHeader,
      TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export function TransactionTable({ tableData }: { tableData: any }) {
      const formatter = new Intl.DateTimeFormat("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
      });
      return (
            <Table>
                  <TableHeader>
                        <TableRow>
                              <TableHead className="w-[100px]"></TableHead>
                              <TableHead></TableHead>
                              <TableHead></TableHead>
                              <TableHead className="text-right"></TableHead>
                        </TableRow>
                  </TableHeader>
                  <TableBody>
                        {tableData?.map((invoice: any) => (
                              <TableRow key={invoice.trxId}>
                                    <TableCell >
                                          <Avatar>
                                                <AvatarImage src={invoice?.profileImg} alt="@shadcn" />
                                                <AvatarFallback>{invoice?.profile.slice(0, 2).toUpperCase()}</AvatarFallback>
                                          </Avatar>
                                    </TableCell>
                                    <TableCell><span className="text-lg">{invoice?.profile}</span> <br /> TrxId: {invoice?.trxId}</TableCell>
                                    <TableCell>{invoice?.type}</TableCell>
                                    <TableCell className="text-right"><span className="text-lg font-semibold">${invoice?.amout}</span> <br />{formatter.format(new Date(invoice?.time))}</TableCell>
                              </TableRow>
                        ))}
                  </TableBody>
            </Table>
      )
}
