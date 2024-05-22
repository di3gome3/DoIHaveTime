import { NextResponse } from 'next/server';
import { HowLongToBeatService } from 'howlongtobeat';

const hltbService = new HowLongToBeatService();

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const gameName = searchParams.get('gameName');

  if (!gameName) {
    return NextResponse.json({ error: 'Game name is required' }, { status: 400 });
  }

  try {
    const results = await hltbService.search(gameName);
    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch data from HowLongToBeat' }, { status: 500 });
  }
}