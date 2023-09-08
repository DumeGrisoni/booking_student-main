<Auth
  supabaseClient={supabase}
  providers={[]}
  extend={true}
  localization={{
    variables: {
      sign_in: {
        email_label: 'Votre adresse Email',
        email_input_placeholder: 'Votre Email',
        password_label: 'Votre mot de passe',
        password_input_placeholder: 'Mot de passe',
        loading_button_label: 'Connexion ...',
        button_label: 'Connexion',
        link_text: 'Vous avez déjà un compte ? Connectez-vous',
      },
      forgotten_password: {
        link_text: 'Mot de passe oublié ?',
        email_label: 'Adresse Email',
        password_label: 'Votre mot de passe',
        email_input_placeholder: 'Votre Email',
        button_label: 'Envoyez la demande',
        loading_button_label: 'Envoi de la demande ...',
        confirmation_text:
          'Vérifiez vos emails pour restaurer votre mot de passe',
      },
      update_password: {
        password_label: 'Nouveau nouveau mot de passe',
        password_input_placeholder: 'Nouveau mot de passe',
        button_label: 'Mettre à jour',
        loading_button_label: 'Mise à jour du mot de passe ...',
        confirmation_text: 'Votre mot de passe à été mis a jour',
      },
      sign_up: {
        email_label: 'Adresse Email',
        password_label: 'Créer un mot de passe',
        email_input_placeholder: 'Créer votre mot de passe',
        password_input_placeholder: 'Votre mot de passe',
        button_label: 'Inscription',
        loading_button_label: 'Inscription ...',
        link_text: "Vous n'avez pas encore de compte ? Inscrivez-vous",
        confirmation_text:
          "Vérifiez vos emails pour confirmer le lien d'inscription",
      },
    },
  }}
  appearance={{
    theme: ThemeSupa,
    className: {
      container: ' flex justify-center items-center p-10 ',
      button: ' px-16 max-w-[200px]',
    },
    style: {
      button: { background: '#4D56A5', color: '#EBEBDE' },
    },
  }}
/>;
