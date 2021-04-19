import { Button, Flex, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from '../components/Form/Input'

type SignInFormData ={
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório'),
  password: yup.string().required('Senha obrigatória')
})

export default function SignIn () {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 3000))

    console.log(values)
  }

  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        as="form"
        width="100%"
        height="300px"
        maxWidth={360}
        backgroundColor="gray.800"
        padding="2rem"
        borderRadius="8"
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="E-mail"
            error={errors.email}
            {...register('email')}
          />

          <Input
            name="password"
            type="password"
            label="Password"
            error={errors.password}
            {...register('password')}
          />
        </Stack>

        <Button
          type="submit"
          marginTop="6"
          colorScheme="pink"
          size="lg"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
