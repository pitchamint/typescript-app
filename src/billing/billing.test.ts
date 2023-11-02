import { Billing } from "./billing";
import { PackageType } from "./packageType";
import { Transaction } from "./transaction";

describe("billing", () => {});

describe("calculate BASIC package billing monthly fee", () => {
  const packageType = PackageType.BASIC;

  beforeEach(() => {});
  it("should return 0THB when no transaction", () => {
    const transactions: Transaction[] = [];

    const billing = new Billing(packageType, transactions);
    const monthlyFee = billing.calculateMonthlyFee();

    expect(monthlyFee).toBe(0);
  });

  it("should return 1THB when 1 min transaction", () => {
    const transactions: Transaction[] = [
      new Transaction(
        new Date("2020-01-01 00:09:00"),
        new Date("2020-01-01 00:10:00")
      ),
    ];

    const billing = new Billing(packageType, transactions);
    const monthlyFee = billing.calculateMonthlyFee();

    expect(monthlyFee).toBe(1);
  });

  it("should return 2THB when 2 min of 1 transaction", () => {
    const transactions: Transaction[] = [
      new Transaction(
        new Date("2020-01-01 00:00:00"),
        new Date("2020-01-01 00:02:00")
      ),
    ];

    const billing = new Billing(packageType, transactions);
    const monthlyFee = billing.calculateMonthlyFee();

    expect(monthlyFee).toBe(2);
  });
});
