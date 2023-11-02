import { PackageType } from "./packageType";
import { Transaction } from "./transaction";

export class Billing {
  constructor(
    public readonly packType: PackageType,
    public readonly transaction: Transaction[]
  ) {}

  calculateMonthlyFee(): number {
    // red green refactor
    if (this.transaction.length === 0) {
      return 0;
    }

    const transaction = this.transaction[0];
    const diff =
      transaction.endTime.getTime() - transaction.startTime.getTime();
    const diffTimeInminues = diff / 1000 / 60;
    return diffTimeInminues;
  }
}
