import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from '@/components/ui/accordion';

interface Props {
   title: string;
   description: string;
   className: string;
}

const DescriptionAcordion = ({ title, description, className }: Props) => {
   return (
      <Accordion className={className} type="single" collapsible>
         <AccordionItem value="item-1">
            <AccordionTrigger className="font-semibold">
               {title}
            </AccordionTrigger>
            <AccordionContent>{description}</AccordionContent>
         </AccordionItem>
      </Accordion>
   );
};

export default DescriptionAcordion;
