import { Icon } from "@iconify/react";
import { Form, useActionData, useNavigation } from "react-router";
import { useState, useCallback, useRef } from "react";
import {
  Button,
  Container,
  FormField,
  Input,
  Textarea,
} from "~/components";
import { useScrollAnimation } from "~/hooks/use-scroll-animation";
import {
  isValidEmail,
  isValidPhone,
  validateFormData,
  type FormData as FormDataType,
} from "~/utils/validation";

interface FormValidationState {
  errors: Record<string, string>;
  touched: Record<string, boolean>;
}

export function ContactFormSection() {
  const actionData = useActionData<{ error?: string; errors?: Record<string, string> }>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  const formRef = useRef<HTMLFormElement>(null);
  const [validation, setValidation] = useState<FormValidationState>({
    errors: {},
    touched: {},
  });

  // Validar campo individual
  const validateField = useCallback((name: string, value: string) => {
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const fieldData: FormDataType = {
      name: (formData.get("name") as string) || "",
      email: (formData.get("email") as string) || "",
      phone: (formData.get("phone") as string) || "",
      company: (formData.get("company") as string) || "",
      message: (formData.get("message") as string) || "",
    };

    // Atualizar o campo sendo validado
    fieldData[name as keyof FormDataType] = value;

    const result = validateFormData(fieldData);
    const fieldError = result.errors[name] || "";

    setValidation((prev) => ({
      ...prev,
      errors: {
        ...prev.errors,
        [name]: fieldError,
      },
      touched: {
        ...prev.touched,
        [name]: true,
      },
    }));
  }, []);

  // Handler de blur (valida ao perder foco)
  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    validateField(name, value);
  }, [validateField]);

  // Validar formulário completo
  const validateForm = useCallback(() => {
    if (!formRef.current) return false;

    const formData = new FormData(formRef.current);
    const data: FormDataType = {
      name: (formData.get("name") as string) || "",
      email: (formData.get("email") as string) || "",
      phone: (formData.get("phone") as string) || "",
      company: (formData.get("company") as string) || "",
      message: (formData.get("message") as string) || "",
    };

    const result = validateFormData(data);
    
    // Marcar todos os campos como touched
    const touched: Record<string, boolean> = {};
    Object.keys(data).forEach((key) => {
      touched[key] = true;
    });

    setValidation({
      errors: result.errors,
      touched,
    });

    return result.valid;
  }, []);

  // Handler de submit (valida antes de enviar)
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    if (!validateForm()) {
      e.preventDefault();
    }
  }, [validateForm]);

  // Mesclar erros do backend com erros do frontend
  const allErrors = {
    ...validation.errors,
    ...(actionData?.errors || {}),
  };

  // Verificar se campo tem erro
  const hasError = (field: string) => {
    return validation.touched[field] && !!allErrors[field];
  };

  // Obter mensagem de erro
  const getError = (field: string) => {
    return validation.touched[field] ? allErrors[field] : "";
  };

  // Verificar se formulário é válido
  const isFormValid = () => {
    if (!formRef.current) return false;
    const formData = new FormData(formRef.current);
    const data: FormDataType = {
      name: (formData.get("name") as string) || "",
      email: (formData.get("email") as string) || "",
      phone: (formData.get("phone") as string) || "",
      company: (formData.get("company") as string) || "",
      message: (formData.get("message") as string) || "",
    };
    const result = validateFormData(data);
    return result.valid;
  };

  return (
    <section
      id="formulario"
      ref={ref}
      className="w-full bg-[#0a0e1a] pt-40 pb-32 border-t border-white/5 scroll-mt-24"
    >
      <Container className="w-full">
        <div className="max-w-5xl mx-auto">
          <div
            className={`text-center text-white mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              Pronto para transformar sua ideia em realidade?
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light mb-8">
              Solicite uma proposta personalizada e sem compromisso. Nossa equipe vai analisar seu
              projeto e apresentar uma solução sob medida para suas necessidades.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-white/70 text-sm">
              <span className="flex items-center gap-2">
                <Icon icon="mdi:check-circle" className="w-5 h-5 text-green-400" />
                Proposta em 24h
              </span>
              <span className="flex items-center gap-2">
                <Icon icon="mdi:check-circle" className="w-5 h-5 text-green-400" />
                Sem compromisso
              </span>
              <span className="flex items-center gap-2">
                <Icon icon="mdi:check-circle" className="w-5 h-5 text-green-400" />
                100% Gratuito
              </span>
            </div>
          </div>

          <div
            className={`border border-white/10 bg-white/5 p-6 md:p-12 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Form
              ref={formRef}
              method="post"
              className="space-y-8"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* Erro geral */}
              {actionData?.error && (
                <div
                  className="bg-red-500/20 border-2 border-red-500/50 text-red-300 px-6 py-4 rounded"
                  role="alert"
                  aria-live="polite"
                >
                  {actionData.error}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <FormField
                    label="Nome Completo"
                    required
                    error={hasError("name") ? getError("name") : undefined}
                  >
                    <Input
                      type="text"
                      name="name"
                      onBlur={handleBlur}
                      placeholder="Seu nome completo"
                      required
                      aria-invalid={hasError("name")}
                      aria-describedby={hasError("name") ? "name-error" : undefined}
                      className={`w-full bg-white/5 border-white/10 focus:border-sky-400 ${
                        hasError("name") ? "border-red-500/50 focus:border-red-500" : ""
                      }`}
                    />
                  </FormField>
                </div>

                <div>
                  <FormField
                    label="Email"
                    required
                    error={hasError("email") ? getError("email") : undefined}
                  >
                    <Input
                      type="email"
                      name="email"
                      onBlur={handleBlur}
                      placeholder="seu@email.com"
                      required
                      aria-invalid={hasError("email")}
                      aria-describedby={hasError("email") ? "email-error" : undefined}
                      className={`w-full bg-white/5 border-white/10 focus:border-sky-400 ${
                        hasError("email") ? "border-red-500/50 focus:border-red-500" : ""
                      }`}
                    />
                  </FormField>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 border-t border-white/10 pt-8">
                <div>
                  <FormField
                    label="Telefone"
                    required
                    error={hasError("phone") ? getError("phone") : undefined}
                  >
                    <Input
                      type="tel"
                      name="phone"
                      onBlur={handleBlur}
                      placeholder="(11) 99999-9999"
                      required
                      aria-invalid={hasError("phone")}
                      aria-describedby={hasError("phone") ? "phone-error" : undefined}
                      className={`w-full bg-white/5 border-white/10 focus:border-sky-400 ${
                        hasError("phone") ? "border-red-500/50 focus:border-red-500" : ""
                      }`}
                    />
                  </FormField>
                </div>

                <div>
                  <FormField
                    label="Empresa"
                    error={hasError("company") ? getError("company") : undefined}
                  >
                    <Input
                      type="text"
                      name="company"
                      onBlur={handleBlur}
                      placeholder="Nome da sua empresa (opcional)"
                      aria-invalid={hasError("company")}
                      aria-describedby={hasError("company") ? "company-error" : undefined}
                      className={`w-full bg-white/5 border-white/10 focus:border-sky-400 ${
                        hasError("company") ? "border-red-500/50 focus:border-red-500" : ""
                      }`}
                    />
                  </FormField>
                </div>
              </div>

              <FormField
                label="Conte-nos sobre seu projeto"
                error={hasError("message") ? getError("message") : undefined}
              >
                <Textarea
                  name="message"
                  onBlur={handleBlur}
                  rows={6}
                  placeholder="Descreva suas necessidades, o problema que você quer resolver, ou qualquer informação relevante sobre seu projeto..."
                  aria-invalid={hasError("message")}
                  aria-describedby={hasError("message") ? "message-error" : undefined}
                  className={`w-full bg-white/5 border-white/10 focus:border-sky-400 resize-none ${
                    hasError("message") ? "border-red-500/50 focus:border-red-500" : ""
                  }`}
                />
              </FormField>

              <Button
                type="submit"
                fullWidth
                disabled={isSubmitting}
                size="lg"
                variant="primary"
                className="group"
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <Icon icon="mdi:loading" className="w-5 h-5 animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  <>
                    Enviar Solicitação - Receber Proposta em 24h
                    <Icon
                      icon="mdi:arrow-right"
                      className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}
              </Button>

              <p className="text-center text-sm text-white/40">
                Ao enviar, você concorda em receber uma proposta personalizada. Seus dados
                estão seguros e não serão compartilhados.
              </p>
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
}
