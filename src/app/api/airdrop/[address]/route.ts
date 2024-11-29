import { NextResponse } from "next/server";
import { pool } from "@/config/database";

export async function GET(request: any, { params }: { params: any }) {
  try {
    const [result]: any = await pool.query(
      "SELECT * FROM airdrop WHERE wallet_address = ?",
      [params.address]
    );
    return NextResponse.json(result[0]);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: any }) {
  const { address } = params;
  let tokenAmount = 888;

  try {
    const body = await request.json();
    const transactionMethod = body.airdropMethod ?? 1;

    const [airDrop]: any = await pool.query(
      `SELECT * FROM post WHERE wallet_address = ?`,
      [address]
    );

    const futureDate = new Date(airDrop[0].register_date).getFullYear();
    const timenow = new Date().getFullYear();
    const diffInYears = timenow - futureDate;

    let x = 0,
      a = 0,
      b = 1;
    for (let i = 1; i < diffInYears; i++) {
      x = a + b;
      a = b;
      b = x;
    }

    tokenAmount = 888 + 1000 * x;

    let transactionField = "";
    let daysToAdd = 0;

    switch (transactionMethod) {
      case 9: // Weekly airdrop
        transactionField = "weekly_endtime";
        daysToAdd = 7;
        break;
      case 10: // Monthly airdrop
        transactionField = "monthly_endtime";
        daysToAdd = 30;
        break;
      default:
        return NextResponse.json(
          { message: "Invalid transaction method" },
          { status: 400 }
        );
    }

    // Check the task end time
    const [endTimeCheck]: any = await pool.query(
      `SELECT ${transactionField} FROM airdrop WHERE wallet_address = ?`,
      [address]
    );

    if (endTimeCheck[0] && endTimeCheck[0][transactionField]) {
      // Check if the airdrop time has expired
      const endTime = new Date(endTimeCheck[0][transactionField]);

      if (new Date() >= endTime) {
        // Update the airdrop record with new end time
        await pool.query(
          `UPDATE airdrop SET ${transactionField} = CURRENT_DATE + INTERVAL ? DAY WHERE wallet_address = ?`,
          [daysToAdd, address]
        );

        // Insert into the transaction table
        await pool.query(
          "INSERT INTO transaction (wallet_address, token_amount, transaction_method) VALUES (?, ?, ?)",
          [address, tokenAmount, transactionMethod]
        );

        // Update the post record
        await pool.query(
          "UPDATE post SET token_amount = token_amount + ? WHERE wallet_address = ?",
          [tokenAmount, address]
        );

        return NextResponse.json({
          message: "Transaction processed successfully",
        });
      } else {
        return NextResponse.json(
          {
            message: `Task ${transactionField} is not available yet for this address`,
          },
          { status: 500 }
        );
      }
    } else {
      return NextResponse.json(
        {
          message: `Task ${transactionField} not available for this address`,
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
