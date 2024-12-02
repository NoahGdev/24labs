'use client';

import { Button } from '@/components/ui//button';
import { Users } from 'lucide-react';
import { HeroArt } from './build';
import ContactButton from '@/components/ui/contactus';

export function Hero() {
  return (
    <div className="min-h-screen bg-gray-50/50 flex items-center justify-center relative overflow-hidden min-w-screen">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none" />
      <div className="container mx-auto px-4 py-20 text-center relative">
        <div className="space-y-20">
          <div className="space-y-8">
            <HeroArt />
          </div>

          <div className="space-y-8">
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A team focused on engineering growth
              <br />
              for cool companies and projects
            </p>

            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-center space-x-4">
                <ContactButton className={'shadow-lg shadow-black/40'} />
                <Button variant="outline" className="rounded-full bg-transparent text-black font-medium" size="lg">
                  View Portfolio
                </Button>
              </div>

              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <Users className="size-4" />
                <span>We&apos;ve Brought 10m+ Active Users</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
