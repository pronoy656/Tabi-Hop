import { ChevronDownIcon } from 'lucide-react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import React from 'react';

// Simple className utility function
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Accordion(props) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({ className, ...props }) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn('border-b last:border-b-0', className)}
      {...props}
    />
  );
}

function AccordionTrigger({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180',
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground text-[#A363D9] pointer-events-none size-8 shrink-0 translate-y-0.5 transition-transform duration-300" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn('pt-0 pb-4', className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

// const AccordionItem = () => {
//     return (
//        <AccordionPrimitive.Header className="flex">
//       <AccordionPrimitive.Trigger
//         data-slot="accordion-trigger"
//         className={cn(
//           "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
//           className
//         )}
//         {...props}
//       >
//         {children}
//         <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
//       </AccordionPrimitive.Trigger>
//     </AccordionPrimitive.Header>
//   )
// }

// function AccordionContent({ className, children, ...props }) {
//   return (
//     <AccordionPrimitive.Content
//       data-slot="accordion-content"
//       className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
//       {...props}
//     >
//       <div className={cn("pt-0 pb-4", className)}>{children}</div>
//     </AccordionPrimitive.Content>
//   )

// };

// export default AccordionItem;
