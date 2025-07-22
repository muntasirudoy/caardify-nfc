"use client"

import { useEffect, useState } from "react"


import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Droplets, Leaf, Wind } from "lucide-react"

export default function BusinessCardCalculator() {
    const [employees, setEmployees] = useState<number>(1000)
    const [cardsPerYear, setCardsPerYear] = useState<number>(1000)
    const [costPerCard, setCostPerCard] = useState<number>(350)

    const [paperCost, setPaperCost] = useState<number>(0)
    const [digitalCost, setDigitalCost] = useState<number>(0)
    const [_savings, setSavings] = useState<number>(0)

    // Environmental impact constants
    const TREES_PER_THOUSAND = 0.12
    const WATER_PER_THOUSAND = 50
    const CO2_PER_THOUSAND = 7.6

    useEffect(() => {
        // Calculate total paper cost
        const totalPaperCost = employees * cardsPerYear * costPerCard
        setPaperCost(totalPaperCost)

        // Estimate digital cost (simplified for example)
        const estimatedDigitalCost = totalPaperCost * 0.1
        setDigitalCost(estimatedDigitalCost)

        // Calculate savings
        setSavings(totalPaperCost - estimatedDigitalCost)
    }, [employees, cardsPerYear, costPerCard])

    const totalCards = employees * cardsPerYear
    const treeSavings = (totalCards / 1000) * TREES_PER_THOUSAND
    const waterSavings = (totalCards / 1000) * WATER_PER_THOUSAND
    const co2Savings = (totalCards / 1000) * CO2_PER_THOUSAND

    return (
        <div className=" bg-gray-50" id="calculator">
            <div className="container mx-auto p-6">
                <div className=" flex flex-col justify-center items-center lg:mb-14">
                    <h1 className=" lg:text-[42px] font-bold mb-6">Digital Business Card Savings Calculator</h1>
                    <p className="text-sm text-muted-foreground mb-8">
                        This calculator shows how much money and resources you save by switching to digital business cards.
                    </p>
                </div>

                <div className="space-y-8">

                    <div className=" grid grid-cols-2 gap-14 max-w-[80%] mx-auto">
                        <div className="space-y-10 border-[2px] rounded-xl shadow-sm bg-white p-6 ">
                            <div className=" space-y-4 mt-4">
                                <div>
                                    <Label htmlFor="employees" className="text-[16px] capitalize">How many employe are at your company?</Label>
                                    <Input
                                        id="employees"
                                        type="number"
                                        value={employees}
                                        className="mt-2 "
                                        onChange={(e) => setEmployees(Number(e.target.value))}
                                        min={1}
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="cardsPerYear" className=" capitalize text-[16px]"
                                    >
                                        How many business cards do you order for each employ per year?
                                    </Label>
                                    <Input
                                        id="cardsPerYear"
                                        type="number"
                                        className=" mt-1"
                                        value={cardsPerYear}
                                        onChange={(e) => setCardsPerYear(Number(e.target.value))}
                                        min={1}
                                    />
                                </div>
                            </div>

                            <div>
                                <Label className=" text-[18px]">
                                    How much does each paper business card cost?
                                </Label>
                                <p className="text-md text-muted-foreground mb-2">
                                    Including shipping and employee time spent on ordering and designing
                                </p>
                                <div className="space-y-2 mt-7">
                                    <Input
                                        type="number"
                                        value={costPerCard}
                                        onChange={(e) => setCostPerCard(Number(e.target.value))}
                                        min={1}
                                        className="w-full"
                                    />
                                    <p className="text-[16px] font-secondary font-semibold">
                                        {costPerCard.toFixed(2)} TK
                                    </p>
                                </div>
                            </div>

                        </div>
                        <Card className="p-6">
                            <h2 className="text-xl font-semibold mb-6">Return on Investment</h2>
                            <div className="grid gap-4 md:grid-cols-2 mb-6">
                                <div className="p-4 border rounded">
                                    <p className="text-sm mb-2">Paper Business Card Costs:</p>
                                    <p className="text-2xl font-bold">{paperCost.toLocaleString()} TK.</p>
                                </div>
                                <div className="p-4 border rounded">
                                    <p className="text-sm mb-2">Digital Business Card Estimated Cost:</p>
                                    <p className="text-2xl font-bold">{digitalCost.toLocaleString()} TK.</p>
                                </div>
                            </div>

                            {/* Subscription Fee */}
                            <div className="p-4 border rounded mb-4">
                                <p className="text-sm mb-2">Subscription Fee (Digital Cost + 9 BDT):</p>
                                <p className="text-2xl font-bold">{(digitalCost + 9).toLocaleString()} TK.</p>
                            </div>

                            {/* Savings Box */}
                            <div className="bg-green-100 p-4 rounded-lg mb-2">
                                <p className="text-sm mb-2 text-green-800 font-medium">Total Savings Per Year:</p>
                                <p className="text-2xl font-bold text-green-700">
                                    {(paperCost - (digitalCost + 9)).toLocaleString()} TK.
                                </p>
                            </div>
                        </Card>


                    </div>


                    <Card className="p-6 ">
                        <h2 className="text-xl font-semibold mb-6">Environmental Impact</h2>
                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="flex flex-col items-center p-4 bg-green-100 rounded-lg">
                                <Leaf className="w-8 h-8 text-green-600 mb-2" />
                                <p className="text-2xl font-bold">{treeSavings.toFixed(0)}</p>
                                <p className="text-sm">Trees</p>
                            </div>
                            <div className="flex flex-col items-center p-4 bg-blue-100 rounded-lg">
                                <Droplets className="w-8 h-8 text-blue-600 mb-2" />
                                <p className="text-2xl font-bold">{waterSavings.toFixed(0)}</p>
                                <p className="text-sm">Gallons of Water</p>
                            </div>
                            <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
                                <Wind className="w-8 h-8 text-gray-600 mb-2" />
                                <p className="text-2xl font-bold">{co2Savings.toFixed(0)}</p>
                                <p className="text-sm">lb of CO2</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

