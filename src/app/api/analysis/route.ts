import { NextResponse } from "next/server";
import { pool } from "@/config/database";

export async function GET(request: any) {
  try {
    const [total]: any = await pool.query(
      "SELECT COUNT(*) as total_count FROM post"
    );
    const totalCount = total[0].total_count;
    const [rows]: any = await pool.query(
      "SELECT SUM(token_amount) AS daily_amount FROM transaction WHERE DATE(date) = CURDATE();"
    );

    const [total_rows]: any = await pool.query(
      "SELECT SUM(token_amount) AS total_amount FROM transaction"
    );

    return NextResponse.json({
      total_count: totalCount,
      paws_count: rows[0].daily_amount,
      earn_amount: total_rows[0].total_amount,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
}
