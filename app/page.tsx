import { WaitlistForm } from '@/components/waitlist-form'
import { Badge } from '@/components/ui/badge'

export const metadata = {
  title: 'Join Our Waitlist | Coming Soon',
  description: 'A revolutionary new platform is coming soon. Join our waitlist to be first in line.',
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-50">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute top-[60%] -right-[10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-2xl text-center">
        <div className="mb-10 space-y-4">
          <Badge variant="outline" className="px-3 py-1 text-sm font-medium border-primary/20 text-primary">
            Launching Soon
          </Badge>
          
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.1]">
            Build something <br />
            <span className="text-primary italic font-serif">extraordinary</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-500 max-w-lg mx-auto leading-relaxed">
            We're building the future of productivity. Be the first to experience it when we open our private beta.
          </p>
        </div>

        <div className="w-full max-w-md mx-auto">
          <WaitlistForm />
        </div>
      </div>
    </main>
  )
}
