
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "¿Qué es la Plataforma de Transparencia Conectada?",
    answer: "Es una iniciativa digital que busca fortalecer la democracia y la confianza ciudadana, ofreciendo un espacio para la participación, el acceso a datos abiertos y la comunicación directa con las instituciones."
  },
  {
    question: "¿Cómo puedo enviar una propuesta ciudadana?",
    answer: "Dirígete a la sección de 'Participación Ciudadana' y selecciona 'Buzón de Propuestas'. Allí encontrarás un formulario donde podrás describir tu idea en detalle. ¡Incluso puedes usar nuestra IA para un análisis preliminar!"
  },
  {
    question: "¿Los datos presentados en la plataforma son oficiales?",
    answer: "Sí, toda la información y los conjuntos de datos (datasets) publicados provienen de fuentes institucionales y son validados para garantizar su fiabilidad. Fomentamos la transparencia con datos verificables."
  },
  {
    question: "¿Cómo puedo participar en las encuestas activas?",
    answer: "En la sección de 'Participación Ciudadana', encontrarás el apartado de 'Encuestas Activas'. Simplemente selecciona la consulta de tu interés y emite tu voto. Tu opinión es muy importante para nosotros."
  },
  {
    question: "¿El código de la plataforma es abierto?",
    answer: "Sí. Uno de nuestros principios fundamentales es ser una plataforma de código abierto. Creemos en la colaboración y la auditoría pública para mejorar continuamente la herramienta."
  },
  {
    question: "¿Cómo puedo contactar si tengo una duda que no está aquí?",
    answer: "Puedes utilizar el formulario en nuestra sección de 'Contacto y Solicitudes' para enviarnos un mensaje directo. Nuestro equipo estará encantado de ayudarte."
  }
];

export default function FaqPage() {
  return (
    <div className="space-y-8">
       <div className="text-center">
        <HelpCircle className="h-16 w-16 mx-auto text-accent" />
        <h1 className="text-4xl font-extrabold text-primary tracking-tighter sm:text-5xl">
          Preguntas Frecuentes
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Encuentre respuestas rápidas a las dudas más comunes sobre nuestra plataforma y sus funcionalidades.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-lg font-semibold text-primary text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
