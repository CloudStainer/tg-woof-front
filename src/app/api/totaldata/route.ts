import { NextResponse } from "next/server";
import { pool } from "@/config/database";

export async function GET(request: any) {
  try {
    const result: any = await pool.query(
      "SELECT * FROM post ORDER BY token_amount desc"      
    );
    return NextResponse.json(result[0]);
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
}
