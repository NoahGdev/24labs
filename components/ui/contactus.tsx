import React from 'react';
import { Button } from '@/components/ui/button';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import { cn } from '@/lib/utils';

interface ContactButtonProps {
  className?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ className }) => {
  return (
    <Button className={cn('rounded-full flex items-center space-x-2 px-3 py-4', className)}>
      <MdOutlineMarkEmailRead />
      <span>Contact Us</span>
    </Button>
  );
};

export default ContactButton;
