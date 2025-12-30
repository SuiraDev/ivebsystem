import { Card, CardContent } from "~/components";

export function SuccessMessage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e1a] to-[#1a1f2e] flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardContent className="text-center py-12">
          <div className="mb-6">
            <svg
              className="w-20 h-20 text-green-400 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">
            Obrigado pelo seu interesse!
          </h2>
          <p className="text-lg text-[#9ca3af] mb-2">
            Recebemos sua solicitação com sucesso.
          </p>
          <p className="text-[#9ca3af]">
            Nossa equipe entrará em contato em até 24 horas para discutir seu projeto.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

