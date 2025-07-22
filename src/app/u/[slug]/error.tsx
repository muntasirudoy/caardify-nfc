'use client'

import { AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useRouter } from 'next/navigation'

export default function ErrorPage({
    error = 'An unexpected error occurred',
    statusCode = 500,
    resetError = () => { }
}: {
    error?: string,
    statusCode?: number,
    resetError?: () => void
}) {
    const router = useRouter()

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                        <AlertTriangle className="w-16 h-16 text-destructive" />
                    </div>
                    <CardTitle className="text-3xl">
                        Error {statusCode}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                        {error}
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col space-y-4">
                    <Button
                        variant="outline"
                        onClick={() => router.push('/')}
                    >
                        Return to Home
                    </Button>
                    <Button
                        variant="destructive"
                        onClick={resetError}
                    >
                        Try Again
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}