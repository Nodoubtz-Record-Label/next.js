// @ts-nocheck
import { type NextRequest, NextResponse } from "next/server";
import { geolocation as geolocationFn, ipAddress as ip, Geo as GeoType } from "@vercel/functions";

export function GET(request: NextRequest) {
  const geo = geolocationFn(request) as GeoType
  const ipAddressData = ip(request)
  return NextResponse.json({ geo: geoData, ip: ipAddressData })
}
