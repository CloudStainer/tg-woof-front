import { NextResponse } from "next/server";
import { pool } from "@/config/database";

export async function GET(request: any, { params }: { params: any }) {
  try {
    const { address } = params;
    const lastLogin: any = await pool.query(
      "SELECT * FROM transaction WHERE wallet_address = ? Order By date DESC LIMIT 1",
      [address]
    );

    if (
      lastLogin[0][0].date &&
      new Date(lastLogin[0][0].date).getDate() != new Date().getDate()
    ) {
      await pool.query(
        `UPDATE post SET daily_count = 2000 WHERE wallet_address = ?`,
        [address]
      );
    }
    const result: any = await pool.query(
      "SELECT * FROM post WHERE wallet_address = ?",
      [address]
    );
    return NextResponse.json(result[0][0]);
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
}

export async function PUT(request: any, { params }: { params: any }) {
  const { address } = params;
  const tokenAmount = params.token_amount ?? 1;
  const transactionMethod = params.transaction_method ?? 1;
  const { daily_count } = await request.json();
  try {
    if (daily_count) {
      
      // Insert a new transaction record
      await pool.query(
        "INSERT INTO transaction (wallet_address, token_amount, transaction_method) VALUES (?, ?, ?)",
        [address, tokenAmount, transactionMethod]
      );

      // Update the post record
      await pool.query(
        "UPDATE post SET token_amount = token_amount + ?, daily_count = ? WHERE daily_count > 0 AND wallet_address = ?",
        [tokenAmount, daily_count, address]
      );

      return NextResponse.json({
        success: true,
        message: "Transaction processed successfully",
      });
    }
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  } finally {
  }
}
