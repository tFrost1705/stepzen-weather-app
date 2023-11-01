"use client";
import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";
//LOOK UP
/**
 * 1) next.js and 'use client'
 *
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10 flex flex-col justify-center items-center ">
      <Card className="max-4xl mx-auto bg-white">
        <Text className="text-6xl font-bold  text-center mb-10">
          Weather AI
        </Text>
        <Subtitle className="text-xl text-center">
          Powered by OpenAI, Next.js, Tailwind CSS, Tremor 2.0
        </Subtitle>

        <Divider className="my-10" />
        <Card className="bg-gradient-to-br from-[#394F68] to-[#183B7E]">
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
