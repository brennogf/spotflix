import React, { useEffect, useState } from "react";

import FormField from "../../../components/FormField";
import PageDefault from "../../../components/PageDefault";

import api from "../../../services/api";
import useForm from "../../../utils/useForm";

import Alert from "../../../components/Alert";
import {
  AddIcon,
  Delete,
  EditIcon,
  EmptyState,
  FolderIcon,
  FormCard,
  HeaderSection,
  PageContainer,
  SubmitButton,
  TableCard,
  TableStyle,
  Update
} from "./styles";

export default function CadastroCategoria() {
  const valoresIniciais = {
    name: "",
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState("");

  useEffect(() => {
    async function searchCategory() {
      try {
        const response = await api.get("/categorias");
        if (response.data.error) {
          setError("Houve algum erro, por favor tente novamente.");
        } else {
          setCategorias(response.data);
        }
      } catch (err) {
        setError("Houve algum erro, por favor tente novamente.");
      }
    }
    searchCategory();
  }, [refresh]);

  const handleUpdate = async (categoriaId, newName) => {
    try {
      setError("");
      setSuccess("");
      const response = await api.put(`/categorias/${categoriaId}`, { name: newName });

      if (response.data.error) {
        setError("Houve algum erro, por favor tente novamente.");
      } else {
        setSuccess("Categoria atualizada com sucesso!");
        setRefresh(refresh + 1);
        setEditingId(null);
        setEditingName("");
      }
    } catch (err) {
      setError("Houve algum erro, por favor tente novamente.");
    }
  };

  const handleEdit = (categoriaId, currentName) => {
    setEditingId(categoriaId);
    setEditingName(currentName);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditingName("");
  };

  return (
    <PageDefault>
      <PageContainer>
        <HeaderSection>
          <h1>
            <FolderIcon />
            Cadastro de Categorias
          </h1>
          <p>Organize suas músicas em categorias personalizadas</p>
        </HeaderSection>

        <FormCard>
          <h2>
            <AddIcon />
            Nova Categoria
          </h2>
          <form
            onSubmit={async function handleSubmit(e) {
              e.preventDefault();
              if (values.name.trim()) {
                setError("");
                setSuccess("");
                try {
                  const response = await api.post("/categorias", { name: values.name });

                  if (response.data.error) {
                    setError("Houve algum erro, por favor tente novamente.");
                  } else {
                    setSuccess("Categoria inserida com sucesso!");
                    setRefresh(refresh + 1);
                    clearForm();
                  }
                } catch (err) {
                  setError("Houve algum erro, por favor tente novamente.");
                }
              } else {
                setError("É obrigatório preencher o nome da categoria.");
              }
            }}
          >
            <FormField
              label="Nome da Categoria"
              name="name"
              value={values.name || ""}
              onChange={handleChange}
            />

            {error && <Alert type="danger">{error}</Alert>}
            {success && <Alert type="success">{success}</Alert>}

            <SubmitButton type="submit">
              <AddIcon />
              Cadastrar Categoria
            </SubmitButton>
          </form>
        </FormCard>

        {categorias.length > 0 && (
          <TableCard>
            <h2>
              <EditIcon />
              Categorias Cadastradas
            </h2>
            <TableStyle>
              <table>
                <thead>
                  <tr>
                    <th>Categoria</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {categorias.map((categoriaAtual) => (
                    <tr key={`${categoriaAtual.name}-${categoriaAtual._id}`}>
                      <td>
                        {editingId === categoriaAtual._id ? (
                          <input
                            className="Categoria"
                            type="text"
                            value={editingName}
                            onChange={(e) => setEditingName(e.target.value)}
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                handleUpdate(categoriaAtual._id, editingName);
                              }
                            }}
                            autoFocus
                          />
                        ) : (
                          <span>{categoriaAtual.name}</span>
                        )}
                      </td>
                      <td>
                        <div className="action-buttons">
                          {editingId === categoriaAtual._id ? (
                            <>
                              <a
                                title="Salvar alterações"
                                onClick={() => handleUpdate(categoriaAtual._id, editingName)}
                              >
                                <Update />
                              </a>
                              <a
                                title="Cancelar edição"
                                onClick={handleCancelEdit}
                              >
                                ✕
                              </a>
                            </>
                          ) : (
                            <>
                              <a
                                title="Editar categoria"
                                onClick={() => handleEdit(categoriaAtual._id, categoriaAtual.name)}
                              >
                                <Update />
                              </a>
                              <a
                                title="Excluir categoria"
                                onClick={async function handleDelete() {
                                  setError("");
                                  setSuccess("");
                                  try {
                                    const response = await api.delete(
                                      `/categorias/${categoriaAtual._id}`
                                    );
                                    if (response.data.error) {
                                      setError("Houve algum erro, por favor tente novamente.");
                                    } else {
                                      setSuccess("Categoria removida com sucesso!");
                                      setRefresh(refresh + 1);
                                    }
                                  } catch (err) {
                                    setError("Houve algum erro, por favor tente novamente.");
                                  }
                                }}
                              >
                                <Delete />
                              </a>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableStyle>
          </TableCard>
        )}

        {categorias.length === 0 && !error && (
          <TableCard>
            <EmptyState>
              <div className="icon">
                <FolderIcon />
              </div>
              <h3>Nenhuma categoria cadastrada</h3>
              <p>Adicione sua primeira categoria usando o formulário acima</p>
            </EmptyState>
          </TableCard>
        )}
      </PageContainer>
    </PageDefault>
  );
}
