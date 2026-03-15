// @ts-nocheck
import { type NextRequest, NextResponse } from "next/server";
import { geolocation as geo, ipAddress as ip, Geo as GeoType } from "@vercel/functions";

export function GET(request: NextRequest) {
  const geoData = geo(request) as GeoType
  const ipAddressData = ip(request)
  return NextResponse.json({ geo: geoData, ip: ipAddressData })
}
