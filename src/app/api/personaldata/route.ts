import { NextResponse } from "next/server";
import { pool } from "@/config/database";

export async function POST(request: Request) {
    try{
      const { address } = await request.json();
      
      const [postCheck]: any = await pool.query(
        "SELECT COUNT(*) as count FROM post WHERE wallet_address = ?",
        [address]
      );  
  
      if (postCheck[0].count === 0) {  
        // If no post record exists, insert a new record  
        const [insertResult]: any = await pool.query(
          "INSERT INTO post (wallet_address, token_amount, daily_count, monthly_amount, premium, register_date) VALUES (?, ?, ?, ?, ?, STR_TO_DATE(?, '%m/%d/%Y'))",
          [address, 0, 2000, 0, 0, new Date().toLocaleDateString()]
        );  
      }  
  
      const [airdropCheck]: any = await pool.query(  
        "SELECT COUNT(*) as count FROM airdrop WHERE wallet_address = ?",  
        [address]  
      );  
  
      if (airdropCheck[0].count === 0) {  
        // If no airdrop record exists, insert a new record  
        const [insertAirdropResult]: any = await pool.query(
          "INSERT INTO `airdrop` (`wallet_address`) VALUES (?)",  
          [address]
        );  
      }  
      return NextResponse.json({ success: true, message: "Wallet Added succuessfully" });
    } catch (error: any) {
      return NextResponse.json({ message: error.message });
    }
  }