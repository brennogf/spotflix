import React, { useEffect, useState } from "react";

import FormField from "../../../components/FormField";
import PageDefault from "../../../components/PageDefault";

import api from "../../../services/api";
import useForm from "../../../utils/useForm";

import Toast from "../../../components/Toast";
import useToast from "../../../hooks/useToast";
import {
  AddIcon,
  Delete,
  EmptyState,
  FormCard,
  FormFieldFull,
  FormGrid,
  HeaderSection,
  MusicIcon,
  PageContainer,
  PlayIcon,
  SubmitButton,
  TableCard,
  TableStyle,
  Update
} from "./styles";

function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7"
  );
}

export default function CadastroFilme() {
  const { handleChange, values, clearForm } = useForm({});
  const [categorias, setCategorias] = useState([]);
  const [musicas, setMusicas] = useState([]);
  const categoryTitles = categorias.map(({ name }) => name);
  const [refresh, setRefresh] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingData, setEditingData] = useState({
    titulo: "",
    url: "",
    categoriaName: ""
  });
  const { toast, showSuccess, showError, hideToast } = useToast();

  useEffect(() => {
    async function loadData() {
      try {
        // Buscar categorias para sugestões
        const categoriasResponse = await api.get("/categorias");
        if (!categoriasResponse.data.error) {
          setCategorias(categoriasResponse.data);
        }

        // Buscar músicas para exibir na tabela
        const musicasResponse = await api.get("/filmes");
        if (!musicasResponse.data.error) {
          setMusicas(musicasResponse.data);
        }
      } catch (err) {
        setError("Houve algum erro, por favor tente novamente.");
      }
    }
    loadData();
  }, [refresh]);

  const handleUpdate = async (musicaId, newData) => {
    try {
      setError("");
      setSuccess("");

      // Validar dados antes de enviar
      if (!newData.titulo || !newData.titulo.trim()) {
        setError("O nome é obrigatório.");
        return;
      }
      if (!newData.url || !newData.url.trim()) {
        setError("A URL é obrigatória.");
        return;
      }
      if (!newData.categoriaName || !newData.categoriaName.trim()) {
        setError("A categoria é obrigatória.");
        return;
      }

      const response = await api.put(`/filmes/${musicaId}`, {
        titulo: newData.titulo,
        url: newData.url,
        categoriaName: newData.categoriaName
      });

      if (response.data.error) {
        showError(response.data.error);
      } else {
        showSuccess("Música atualizada com sucesso!");
        setRefresh(refresh + 1);
        setEditingId(null);
        setEditingData({ titulo: "", url: "", categoriaName: "" });
      }
    } catch (err) {
      showError("Houve algum erro, por favor tente novamente.");
    }
  };

  const handleEdit = (musicaId, currentData) => {
    setEditingId(musicaId);
    setEditingData(currentData);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditingData({ titulo: "", url: "", categoriaName: "" });
  };

  const handleEditFieldChange = (field, value) => {
    setEditingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <PageDefault>
      <PageContainer>
        <HeaderSection>
          <h1>
            <MusicIcon />
            Cadastro de Músicas
          </h1>
          <p>Adicione suas músicas favoritas à sua biblioteca</p>
        </HeaderSection>

        <FormCard>
          <h2>
            <AddIcon />
            Nova Música
          </h2>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              if (values.titulo && values.url && values.categoriaName) {
                setError("");
                setSuccess("");
                try {
                  const response = await api.post("/filmes", {
                    categoriaName: values.categoriaName,
                    titulo: values.titulo,
                    url: values.url,
                  });

                  if (response.data.error) {
                    showError(response.data.error);
                  } else {
                    showSuccess("Música inserida com sucesso!");
                    setRefresh(refresh + 1);
                    clearForm();
                  }
                } catch (err) {
                  showError("Houve algum erro, por favor tente novamente.");
                }
              } else {
                showError("É obrigatório preencher todos os campos.");
              }
            }}
          >
            <FormGrid>
              <FormField
                label="Nome da Música"
                name="titulo"
                value={values.titulo || ""}
                onChange={handleChange}
              />

              <FormField
                label="Categoria"
                name="categoriaName"
                value={values.categoriaName || ""}
                onChange={handleChange}
                suggestions={categoryTitles}
              />
            </FormGrid>

            <FormFieldFull>
              <FormField
                label="URL da Música"
                name="url"
                value={values.url || ""}
                onChange={handleChange}
              />
            </FormFieldFull>


            <SubmitButton type="submit">
              <AddIcon />
              Cadastrar Música
            </SubmitButton>
          </form>
        </FormCard>

        {musicas.length > 0 && (
          <TableCard>
            <h2>
              <PlayIcon />
              Músicas Cadastradas
            </h2>
            <TableStyle>
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>{editingId ? 'URL' : 'Vídeo'}</th>
                    <th>Categoria</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {musicas.map((categoriaAtual) =>
                    categoriaAtual.filmes.map((atual) => (
                      <tr key={`${atual.titulo}-${atual._id}`}>
                        <td>
                          {editingId === atual._id ? (
                            <input
                              className="Titulo"
                              type="text"
                              value={editingData.titulo}
                              onChange={(e) => handleEditFieldChange('titulo', e.target.value)}
                              onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                  handleUpdate(atual._id, editingData);
                                }
                              }}
                              autoFocus
                            />
                          ) : (
                            <span>{atual.titulo}</span>
                          )}
                        </td>
                        <td>
                          {editingId === atual._id ? (
                            <input
                              className="Url"
                              type="text"
                              value={editingData.url}
                              onChange={(e) => handleEditFieldChange('url', e.target.value)}
                              onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                  handleUpdate(atual._id, editingData);
                                }
                              }}
                              style={{ width: '200px' }}
                              placeholder="URL do vídeo"
                            />
                          ) : (
                            <div style={{ width: '200px', height: '120px', overflow: 'hidden', borderRadius: '8px' }}>
                              {atual.url ? (
                                <img
                                  src={`https://img.youtube.com/vi/${getYouTubeId(atual.url)}/hqdefault.jpg`}
                                  alt={atual.titulo}
                                  style={{
                                    width: '200px',
                                    height: '120px',
                                    objectFit: 'cover',
                                    borderRadius: '8px'
                                  }}
                                />
                              ) : (
                                <div style={{
                                  width: '200px',
                                  height: '120px',
                                  backgroundColor: '#333',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  color: '#666',
                                  borderRadius: '8px'
                                }}>
                                  Sem vídeo
                                </div>
                              )}
                            </div>
                          )}
                        </td>
                        <td>
                          {editingId === atual._id ? (
                            <div style={{ position: 'relative' }}>
                              <input
                                className="Titulo"
                                type="text"
                                value={editingData.categoriaName}
                                onChange={(e) => handleEditFieldChange('categoriaName', e.target.value)}
                                onKeyPress={(e) => {
                                  if (e.key === 'Enter') {
                                    handleUpdate(atual._id, editingData);
                                  }
                                }}
                                placeholder="Digite a categoria"
                                list={`categoria-suggestions-${atual._id}`}
                              />
                              <datalist id={`categoria-suggestions-${atual._id}`}>
                                {categoryTitles.map((title, index) => (
                                  <option key={index} value={title} />
                                ))}
                              </datalist>
                            </div>
                          ) : (
                            <span>{categoriaAtual.name}</span>
                          )}
                        </td>
                        <td>
                          <div className="action-buttons">
                            {editingId === atual._id ? (
                              <>
                                <a
                                  title="Salvar alterações"
                                  onClick={() => handleUpdate(atual._id, editingData)}
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
                                  title="Editar música"
                                  onClick={() => handleEdit(atual._id, {
                                    titulo: atual.titulo,
                                    url: atual.url,
                                    categoriaName: categoriaAtual.name
                                  })}
                                >
                                  <Update />
                                </a>
                                <a
                                  title="Excluir música"
                                  onClick={async function handleDelete() {
                                    try {
                                      const response = await api.delete(
                                        `/filmes/${atual._id}`
                                      );
                                      if (response.data.error) {
                                        showError("Houve algum erro, por favor tente novamente.");
                                      } else {
                                        showSuccess("Música removida com sucesso!");
                                        setRefresh(refresh + 1);
                                      }
                                    } catch (err) {
                                      showError("Houve algum erro, por favor tente novamente.");
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
                    ))
                  )}
                </tbody>
              </table>
            </TableStyle>
          </TableCard>
        )}

        {musicas.length === 0 && !error && (
          <TableCard>
            <EmptyState>
              <div className="icon">
                <MusicIcon />
              </div>
              <h3>Nenhuma música cadastrada</h3>
              <p>Adicione sua primeira música usando o formulário acima</p>
            </EmptyState>
          </TableCard>
        )}
      </PageContainer>

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </PageDefault>
  );
}
