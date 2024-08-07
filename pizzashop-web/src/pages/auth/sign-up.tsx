import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';

const signUpForm = z.object({
    restaurantName: z.string(),
    managerName: z.string(),
    phone: z.string(),
    email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

const SignUp = () => {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignUpForm>()

    const navigate = useNavigate()

    async function handleSignUp(data: SignUpForm) {
        try {
            await new Promise((resolve => setTimeout(resolve, 3000)))
            console.log(data)
            toast.success('Restaurante cadastrado com sucesso!', {
                action: {
                    label: 'Login',
                    onClick: () => navigate('/sign-in')
                }
            })
        } catch (error) {
            toast.error('Erro ao cadastrar restaurante!')

        }
    }

    return (
        <>
            <Helmet title="Cadastro" />
            <div className="p-8">
                <Button variant='ghost' className='absolute right-8 top-8' asChild>
                    <Link to="/sign-in" className=''>Fazer Login</Link>
                </Button>
                <div className="w-[350px] flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Criar conta</h1>
                        <p className="text-sm text-muted-foreground">Seja um parceiro e comece suas vendas</p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
                        <div className="space-y-2">
                            <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
                            <Input id="restaurantName" type="text" {...register('restaurantName')} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="managerName">Seu nome</Label>
                            <Input id="managerName" type="text" {...register('managerName')} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Seu Celular</Label>
                            <Input id="phone" type="tel" {...register('phone')} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Seu e-mail</Label>
                            <Input id="email" type="email" {...register('email')} />
                        </div>
                        <Button disabled={isSubmitting} type="submit" className="w-full">
                            Finalizar Cadastro
                        </Button>

                        <p className='px-6 text-center text-sm leading-relaxed text-muted-foreground'>
                            Ao continuar, você concorda com nossos <a href='#' className='underline'>Termos de serviço</a> e <a href='#' className='underline'>Políticas de privacidade.</a>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUp;