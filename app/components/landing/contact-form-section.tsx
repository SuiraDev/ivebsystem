import { Icon } from "@iconify/react";
import { Form, useActionData, useNavigation } from "react-router";
import { useState, useCallback, useRef } from "react";
import {
  Button,
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
      className="relative min-h-screen py-16 md:py-24 bg-[#0a0e1a] bg-grid-separator flex items-center scroll-mt-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0  h-[600px] bg-sky-600/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0  h-[600px] bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          {/* Left: CTA Text */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 md:mb-8">
              Pronto para <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">
                Transformar sua Ideia?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/60 mb-8 md:mb-12">
              Solicite uma proposta personalizada e sem compromisso. Nossa equipe vai analisar seu
              projeto e apresentar uma solução sob medida para suas necessidades.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Icon icon="mdi:check-circle" className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-base text-white/70">Proposta em 24h</span>
              </div>
              <div className="flex items-center gap-4">
                <Icon icon="mdi:check-circle" className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-base text-white/70">Sem compromisso</span>
              </div>
              <div className="flex items-center gap-4">
                <Icon icon="mdi:check-circle" className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-base text-white/70">100% Gratuito</span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="text-white relative">
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 -ml-8 lg:-ml-12 separator-vertical" />
            <div className="lg:hidden separator-line mb-8" />
            <div className="mb-6 md:mb-8">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">Vamos Conversar?</h3>
              <p className="text-sm md:text-base text-white/60">Preencha o formulário e entraremos em contato em breve.</p>
            </div>

            <Form
              ref={formRef}
              method="post"
              className="space-y-4"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* Erro geral */}
              {actionData?.error && (
                <div
                  className="bg-red-500/20 border-2 border-red-500/50 text-red-300 px-4 py-3 rounded-lg text-sm"
                  role="alert"
                  aria-live="polite"
                >
                  {actionData.error}
                </div>
              )}

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
                    className={`w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 outline-none transition-all text-sm placeholder:text-white/30 ${
                      hasError("name") ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
                    }`}
                  />
                </FormField>
              </div>

              <div className="grid grid-cols-2 gap-4">
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
                    className={`w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 outline-none transition-all text-sm placeholder:text-white/30 ${
                      hasError("email") ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
                    }`}
                    />
                  </FormField>
                </div>

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
                      placeholder="(00) 00000-0000"
                      required
                      aria-invalid={hasError("phone")}
                      aria-describedby={hasError("phone") ? "phone-error" : undefined}
                      className={`w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 outline-none transition-all text-sm placeholder:text-white/30 ${
                        hasError("phone") ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
                      }`}
                    />
                  </FormField>
                </div>
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
                    className={`w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 outline-none transition-all text-sm placeholder:text-white/30 ${
                      hasError("company") ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
                    }`}
                  />
                </FormField>
              </div>

              <div>
                <FormField
                  label="Mensagem"
                  error={hasError("message") ? getError("message") : undefined}
                >
                  <Textarea
                    name="message"
                    onBlur={handleBlur}
                    rows={3}
                    placeholder="Conte um pouco sobre seu projeto..."
                    aria-invalid={hasError("message")}
                    aria-describedby={hasError("message") ? "message-error" : undefined}
                    className={`w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 outline-none transition-all text-sm resize-none placeholder:text-white/30 ${
                      hasError("message") ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
                    }`}
                  />
                </FormField>
              </div>

              <Button
                type="submit"
                fullWidth
                disabled={isSubmitting}
                size="lg"
                variant="primary"
                className="group w-full py-3 bg-sky-500 text-white rounded-lg font-semibold text-sm hover:bg-sky-600 transition-colors shadow-lg hover:shadow-sky-500/20 mt-2"
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <Icon icon="mdi:loading" className="w-5 h-5 animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  <>
                    Enviar Mensagem
                    <Icon
                      icon="mdi:arrow-right"
                      className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}
              </Button>

              <div className="text-center">
                <span className="text-xs text-white/40 flex items-center justify-center gap-1">
                  <Icon icon="mdi:check-circle" className="w-3 h-3" />
                  Resposta em até 24 horas
                </span>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
